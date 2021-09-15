import { useLanyard } from "react-use-lanyard";
import Image from "next/image";

/* Import types */
import type { FC } from "react";

/* Import data */
import userId from "../data/user";

const Status: FC = () => {
  const { loading, status } = useLanyard({
    userId,
    socket: true,
  });

  const getActivity = () => {
    return status?.activities.at(-1);
  };

  const getImage = () => {
    const activity = getActivity();

    const { application_id } = activity || {};
    const { large_image, small_image } = activity?.assets || {};

    const [largeImage, smallImage] = [
      `https://cdn.discordapp.com/app-assets/${application_id}/${large_image}.png?size=256`,
      `https://cdn.discordapp.com/app-assets/${application_id}/${small_image}.png?size=256`,
    ];

    return {
      largeImage,
      smallImage,
    };
  };

  return (
    <>
      {loading === false ? (
        <div className="flex items-center w-3/4 p-4 space-x-4 bg-gray-100 rounded-lg">
          <Image
            src={getImage().largeImage}
            width="100px"
            height="100px"
            alt="icon"
            draggable="false"
            className="flex-shrink-0 rounded-lg"
          />

          <div className="flex flex-col truncate">
            <h2 className="text-lg truncate">{getActivity()?.name}</h2>
            <div className="truncate">{getActivity()?.details}</div>
            <div className="truncate">{getActivity()?.state}</div>
          </div>
        </div>
      ) : (
        <div className="text-white">Loading data...</div>
      )}
    </>
  );
};

export default Status;
