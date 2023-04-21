import type { NextApiRequest, NextApiResponse } from "next";

import fetch from "node-fetch";
import stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);
const url =
  "https://myrient.erista.me/files/No-Intro/Nintendo%20-%20Nintendo%20DS%20(Decrypted)/New%20Touch%20Party%20Game%20(Europe).zip";

const handler = async (req, res) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader("Content-Type", "application/zip");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=pokemon-black-2.zip"
  );
  await pipeline(response.body, res);
};

export default handler;
