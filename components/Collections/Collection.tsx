import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";

export default function Collection({ index }: { index: number }) {
  const [imageUri, setImageUri] = useState<string>("");

  // get BAYC Collection image uri
  const getCollection = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://ipfs.io/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/${index}`
      );
      // set image uri
      setImageUri(data.image.replace("ipfs://", "https://ipfs.io/ipfs/"));
    } catch (err) {
      console.error(err);
    }
  }, [index]);

  useEffect(() => {
    getCollection();
  }, [getCollection]);

  return (
    <Image
      src={imageUri}
      className="min-w-[250px]"
      width="250px"
      height="250px"
      alt=""
    />
  );
}
