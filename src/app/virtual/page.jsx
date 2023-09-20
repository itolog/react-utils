"use client";
import React from "react";

import VirtualList from "@/components/VirtualList/VirtualList";
import data from "@/components/VirtualList/data.json";

const Page = () => {
  const Component = ({ id, text }) => {
    return (
      <div key={id}>
        <span>{id}</span>
        <br />
        <span>{text}</span>
      </div>
    );
  };

  return (
    <div>
      <VirtualList data={data} itemHeight={100} renderComponent={Component} />
    </div>
  );
};

export default Page;
