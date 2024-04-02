import React from "react";
import Image from "next/image";
import type { galleryObj } from "../types";

// 10個のオブジェクトを格納するための空の配列を作成
const galleryData: galleryObj[] = [];

// 10回のループでオブジェクトを生成して配列に追加
for (let i = 1; i <= 10; i++) {
  const obj = {
    id: i,
    title: `タイトル${i}`,
    url: `https://source.unsplash.com/random/${i}`,
    description: `説明をここに入れる${i}`,
  };
  galleryData.push(obj);
}

const ImageList = () => {
  return (
    <>
      {galleryData.map((data: galleryObj) => (
        <div className="mb-4 duration-150 hover:scale-[1.025]" key={data.id}>
          <div className="relative mb-4 before:absolute before:inset-0 before:rounded-md before:bg-black before:bg-opacity-20 before:content-['']">
            <Image
              className="rounded-lg"
              src={data.url}
              alt="img"
              width={1000}
              height={1000}
            />
            <div className="test__body absolute inset-0 flex flex-col justify-between p-3 text-white">
              <div className="relative">
                <h1 className="mb-1 text-3xl font-bold">{data.title}</h1>
                <p className="test__author font-sm font-light">
                  {data.description}
                </p>
              </div>
              <p className="test__author text-xs  font-light">20yy/mm/dd</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ImageList;
