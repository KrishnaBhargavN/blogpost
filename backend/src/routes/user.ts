import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signupInput, signinInput } from "blogpost-common";

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Invalid Input!" });
  }
  const tempPassword = new TextEncoder().encode(body.password);
  const hashedPassword = await crypto.subtle.digest(
    {
      name: "SHA-256",
    },
    tempPassword
  );

  const hashArray = Array.from(new Uint8Array(hashedPassword));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashHex,
      },
    });

    const payload = {
      id: user.id,
    };

    const token = await sign(payload, c.env.JWT_SECRET);

    return c.json({ message: "User created successfully!", token: token });
  } catch (error) {
    c.status(500);
    return c.json({ error: error });
  }
});

userRouter.post("/login", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const { success } = signinInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Invalid Input!" });
  }
  const tempPassword = new TextEncoder().encode(body.password);
  const hashedPassword = await crypto.subtle.digest(
    {
      name: "SHA-256",
    },
    tempPassword
  );
  const hashArray = Array.from(new Uint8Array(hashedPassword));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: hashHex,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ message: "Invalid Credentials!!!" });
  }
  const payload = {
    id: user.id,
  };

  const jwt = await sign(payload, c.env.JWT_SECRET);

  return c.json({ message: "User logged in successfully!", token: jwt });
});

export default userRouter;
