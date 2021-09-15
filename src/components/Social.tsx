/* Import types */
import type { FC } from "react";

/* Import socials data */
import socials from "../data/socials";

const Social: FC = () => {
  return (
    <>
      {socials.map((social, _) => {
        const Icon = social.icon;

        return (
          <a
            key={_}
            href={social.url}
            target="_blank"
            title={social.title}
            rel="noopener noreferrer"
            className="block p-2 text-white text-opacity-50 transition-colors bg-indigo-500 bg-opacity-50 rounded hover:text-opacity-100 hover:bg-opacity-100"
          >
            <Icon size="30" />
          </a>
        );
      })}
    </>
  );
};

export default Social;
