import React, { useCallback, useRef, useState } from "react";

import { useFixedSizeList } from "@/hooks/virtualization/useFixedSizeList";

const VirtualList = ({ data, renderComponent , itemHeight = 40, containerHeight= 600}) => {
  const [listItems, setListItems] = useState(data);
  const scrollElementRef = useRef(null);

  const { isScrolling, virtualItems, totalHeight } = useFixedSizeList({
    itemHeight: itemHeight,
    itemsCount: listItems.length,
    listHeight: containerHeight,
    getScrollElement: useCallback(() => scrollElementRef.current, []),
  });

  return (
    <div
      ref={scrollElementRef}
      style={{
        height: containerHeight,
        overflow: "auto",
        border: "1px solid lightgrey",
        position: "relative",
      }}>
      <div style={{ height: totalHeight }}>
        {virtualItems.map((virtualItem) => {
          const item = listItems[virtualItem.index];

          return (
            <div
              style={{
                position: "absolute",
                top: 0,
                transform: `translateY(${virtualItem.offsetTop}px)`,
                height: itemHeight,
                padding: "6px 12px",
              }}
              key={item.id}>
              {isScrolling ? "Scrolling..." : renderComponent(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualList;
