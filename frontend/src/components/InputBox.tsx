interface InputBoxProps {
  placeholder: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputBox(InputBoxProps: InputBoxProps) {
  return (
    <div>
      <div>
        <div className=" font-semibold font-sans">
          {InputBoxProps.placeholder}
        </div>
        <input
          className="border-2 bg-gray-50 border-black border-opacity-20 rounded-md w-full h-10 p-2 mt-2 mb-2"
          type={InputBoxProps.type}
          placeholder={`Enter ${InputBoxProps.placeholder}`}
          id={InputBoxProps.placeholder}
          name={InputBoxProps.placeholder}
          onChange={InputBoxProps.onChange}
        />
      </div>
    </div>
  );
}
export default InputBox;
