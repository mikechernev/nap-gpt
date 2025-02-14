import { FC, useEffect, useRef } from "react";
import ChatGptImg from "../../img/chatgpt.png";
import MyImg from "../../img/me.png";
import { ResponseInterface } from "./response-interface";
import hljs from "highlight.js";
import "./PromptResponseList.css";

interface PromptResponseListProps {
  responseList: ResponseInterface[];
}

const PromptResponseList: FC<PromptResponseListProps> = ({ responseList }) => {
  const responseListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    hljs.highlightAll();
  });

  useEffect(() => {
    hljs.highlightAll();
  }, [responseList]);

  return (
    <div className="prompt-response-list" ref={responseListRef}>
      {responseList.map((responseData) => (
        <div
          className={
            "response-container " +
            (responseData.selfFlag ? "my-question" : "chatgpt-response")
          }
          key={responseData.id}
        >
          <img
            className="avatar-image"
            src={responseData.selfFlag ? MyImg : ChatGptImg}
            alt="avatar"
          />
          <div
            className={
              (responseData.error ? "error-response " : "") + "prompt-content"
            }
            id={responseData.id}
          >
            <pre>{responseData.response?.trim()}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromptResponseList;
