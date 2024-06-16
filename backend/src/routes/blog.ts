import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "blogpost-common";

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: any;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || "";
  try {
    const token = header.split(" ")[1];
    const response = await verify(token, c.env.JWT_SECRET);

    if (response.id) {
      c.set("userId", response.id);
      await next();
    } else {
      c.status(403);
      return c.json({ message: "Unauthorized" });
    }
  } catch (error) {
    c.status(403);
    return c.json({ error: error });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Invalid Input!" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const response = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("userId"),
      },
    });
    return c.json({ message: response });
  } catch (error) {
    c.status(500);
    return c.json({ message: error });
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const { success } = updatePostInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ message: "Invalid Input!" });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const response = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
  } catch (error) {
    c.status(500);
    return c.json({ message: error });
  }
  return c.json({ message: "Blog updated successfully!" });
});

blogRouter.get("/id/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const response = await prisma.post.findFirst({
      where: {
        id: await c.req.param("id"),
      },
      select: {
        title: true,
        content: true,
        id: true,
        publishedDate: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ message: response });
  } catch (error) {
    c.status(500);
    return c.json({ message: error });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        publishedDate: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ message: response });
  } catch (error) {
    c.status(500);
    return c.json({ message: error });
  }
});

export default blogRouter;
