import CodeMirror from "@uiw/react-codemirror";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

interface Props {
  value: string;
  onChange: (val: any) => void;
  language: any;
  readonly: boolean
}

const CodeEditor = ({ value, onChange, language, readonly }: Props) => {
  return <div>
    <CodeMirror
      value={value}
      height="200px"
      theme={tokyoNight}
      extensions={[language]}
      onChange={onChange}
      style={{ textAlign: 'left' }}
      readOnly={readonly}
    />
  </div>
}
export default CodeEditor;
