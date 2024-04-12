"use client"
import Link from 'next/link';
import React from 'react';

function Serieslist({item}) {
    const {matchlink,title,logo,team1,score, overs,team2, score2,overs2,logo2,stutas,update,id} =item;
    const link =`https://crex.live${matchlink}`
    return (
        <div>
            

<div class="bg-light rounded-xl shadow-lg space-y-2 py-5 sm:py-10">
<h3 class="mb-2 text-center">{title}</h3>
  <Link class="mx-auto max-w-7xl px-6" href={`/cricket/matchdetais/${id}`}>
    <dl class="grid gap-x-10 gap-y-2 text-center grid-cols-3">
      <div class="mx-auto grid grid-cols-2 flex max-w-xs flex-col gap-y-2">
      <img class="shrink-0 h-12 w-12 rounded-full" src={logo} alt={team1} />
        <div>
        <dt class="text-base font-bold">{team1}</dt>
        <dd class="order-first font-semibold">{score} {overs}</dd>
        </div>
      </div>

      <div class="mx-auto flex max-w-xs flex-col gap-y-2">
        <dt class="text-base font-bold">{stutas}</dt>
        <dd class="order-first font-semibold">{update}</dd>
      </div>

      <div class="mx-auto flex grid grid-cols-2 max-w-xs flex-col gap-y-2">
      <img class="shrink-0 h-12 w-12 rounded-full" src={logo2} alt={team2} />
        <div>
        <dt class="text-base font-bold">{team2}</dt>
        <dd class="order-first font-semibold">{score2} {overs2}</dd>
        </div>
      </div>
      
    </dl>
  </Link>
</div>
        </div>
    );
}

export default Serieslist;