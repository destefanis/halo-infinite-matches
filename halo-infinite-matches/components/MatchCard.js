import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from 'next/link'

export default function MatchCard({
  map,
  mode,
  outcome,
  date,
  playlist,
  background,
  id,
  player,
}) {
  // let formattedDate = dayjs(date).format("DD/MM/YYYY");
  dayjs.extend(relativeTime);

  let timeStamp = dayjs().to(dayjs(date));
  

  return (
    <Link href={`/` + player + `/${encodeURIComponent(id)}`}>
    <div
      className="card"
      style={{ backgroundImage: "url(" + background + ")" }}
      key={id}
    >
    {/* <Link href={`/match/overview/` + id}> */}
      <div className="card-content">
        <div className="card-meta-info">
          <div className="card-map">
            <img
              className="card-icon"
              src="/map.svg"
              alt="An SVG of a map icon"
            />
            <h4 class="card-label">{map}</h4>
          </div>
          <div className="card-date">
            <img
              className="card-icon"
              src="/date.svg"
              alt="An SVG of a calendar icon"
            />
            <h4 className="card-label">{timeStamp}</h4>
          </div>
        </div>

        <div className="card-info">
          <h4 className="card-details">
            {playlist} - <span className="outcome">{outcome}</span>
          </h4>
          <h2 className="card-title">{mode}</h2>
        </div>
      </div>

      <div className="overlay"></div>
      
    </div>
    </Link>
  );
}
