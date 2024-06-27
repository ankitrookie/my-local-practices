import { useState, useCallback } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava, FaPython } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { CiPlay1 } from "react-icons/ci";
import CodeEditor from "./code-editor";
import { Button } from "../ui/button";
import { CODE_SNIPPETS } from "../lib/constant";
import { getOutput } from "../api/index";
import Output from "./output-box";


interface IconsProps {
  lang: string;
  icon: JSX.Element;
  langExtension: any
};

/* if i put it inside, my main function, it will re-render or created every subsiquet time, so 
  putting out-side my main function it will only create once, if i have to put it, then i can 
  use useMemo of memoize it. */
const ICONS: IconsProps[] = [
  { lang: "javascript", icon: <IoLogoJavascript size={25} key="javascript" />, langExtension: javascript },
  { lang: "java", icon: <FaJava size={25} key="java" />, langExtension: java },
  { lang: "python", icon: <FaPython size={25} key="python" />, langExtension: python },
];

const ProblemDetails = () => {
  const [language, setLanguage] = useState(javascript);
  const [value, setValue] = useState<string>(CODE_SNIPPETS["javascript"]);
  const [currentLang, setCurrentLang] = useState<string>("javascript")
  const [output, setOutput] = useState<string>("");

  const onChange = useCallback((val: any) => {
    /*     console.log('val:', val); */
    setValue(val);
  }, []);

  // the more icon in the list the more components u are re-rendering in the list, without 
  // callback icons component can might receive a new onClick causing each of those component
  // to unnecessari re-render.
  const handleLangChange = useCallback((langExtension: any, lang: string) => {
    setLanguage(langExtension);
    setValue(CODE_SNIPPETS[lang]);
    setCurrentLang(lang);
  }, []);

  const handleRun = useCallback(async () => {
    /*     here we just send it to third party api, for code exicutation */
    const obj = {
      language: currentLang,
      sourcecode: value
    }
    const data = await getOutput(obj);
    setOutput(data.run.output);
  }, [value]);

  const handleSubmit = useCallback((val: any) => {
    /*     here we send it to backend server */
    console.log("Submit", val)
  }, []);

  return <>
    <div className="flex">
      <div className="flex-col">
        {ICONS.map(({ icon, lang, langExtension }: IconsProps) => (
          <div key={lang} onClick={() => handleLangChange(langExtension, lang)} className={`border border-gray-700 p-2 ${lang == currentLang ? 'bg-gray-800' : null} hover:bg-gray-800 cursor-pointer`}>{icon}</div>)
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-start item-center">
          <Button onClick={handleRun} icon={
            <CiPlay1 style={{ marginRight: "4px" }} size={20} />
          }>
            Run
          </Button>

          <Button onClick={handleSubmit} icon={
            <IoCloudUploadOutline style={{ marginRight: "4px" }} size={20} />
          }>
            Submit
          </Button>
        </div>
        <CodeEditor value={value} onChange={onChange} language={language} readonly={false} />
        <div className="border border-gray-700 rounded-lg bg-[#111827] p-4">
          <div className="text-[20px] font-bold text-left">Output</div>
          <CodeEditor value={output} onChange={onChange} language={language} readonly={true} />
        </div>
      </div>
    </div>
  </>
};

export default ProblemDetails;
