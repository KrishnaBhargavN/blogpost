/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wB0J2YSblrr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Button from "../components/Button";
import NewPostButton from "../components/NewPostButton";

export default function Landing() {
  return (
    <div>
      <div>
        <div className="flex justify-between border-b-2">
          <div className="p-4 pl-6 font-semibold">Blogpost</div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center pr-10">
              <div className="flex ">
                <div className="pr-4">
                  <Button
                    name={"Signin"}
                    onClick={() => {
                      window.location.href = "/signin";
                    }}
                  />
                </div>
                <div>
                  <Button
                    name={"Signup"}
                    onClick={() => {
                      window.location.href = "/signup";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div className="w-full flex justify-center h-3/4 bg-slate-200">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold">Welcome to our Blog</h1>
            <div className="w-full flex justify-center pt-4">
              <div className="w-fit">
                <Button
                  name={`Read Blogs ${"\u2192"}`}
                  onClick={() => {
                    window.location.href = "/blogs";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
