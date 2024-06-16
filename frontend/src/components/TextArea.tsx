import { useState, useRef, useEffect, ChangeEvent } from "react";

function TextArea({
  setContentFromParent,
}: {
  setContentFromParent: (content: string) => void;
}) {
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, [content]);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on scrollHeight
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setContentFromParent(e.target.value);
  };

  return (
    <div>
      <div className="relative w-full min-w-[200px]">
        <textarea
          ref={textareaRef}
          className="overflow-hidden peer h-full min-h-[500px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all  focus:outline-0 disabled:resize-none  disabled:bg-blue-gray-50"
          placeholder="Write your blogpost here..."
          rows={1}
          value={content}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
}
export default TextArea;
