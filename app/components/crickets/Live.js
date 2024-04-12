
export default function Live ({data}) {
    
    const {title,balltoball,logo,team1,score,overs, runrate,
        update,partnership,recentballs,lastwicket,commentary,
        batsman,batsmanimg,batsmanrun,bat,batsman2,batsman2img,batsmanrun2,bowler,bowlerimg,
        bowlerscore} = data;
    return(
        <div class="p-6 max-w-auto mx-auto bg-white rounded-xl shadow-lg items-center space-x-4">
            <div class="w-full aspect-video">
            <h3 class="mb-2 text-center">{title}</h3>
            <div class='grid grid-cols-3 gap-4'>
                <div>
                    <div class='mx-auto grid grid-cols-2'>
                        <img class="shrink-0 h-12 w-12 rounded-full" src={logo} alt={team1} />
                        <div class='grid-cols-3'>
                            <p>{team1}</p>
                            <p>{score} {overs}</p>
                        </div>
                    </div>
                    <div class='grid grid-cols-2'>
                        <div class='grid grid-cols-2'>
                            <img class="shrink-0 h-12 w-12 rounded-full" src={batsmanimg} alt={batsman} />
                            <div>
                                <p>{batsman}</p>
                                <p>{batsmanrun} {bat}</p>
                            </div>

                        </div>
                        <div class='grid grid-cols-2'>
                            <img class="shrink-0 h-12 w-12 rounded-full" src={batsmanimg} alt={batsman} />
                            <div>
                                <p>{batsman}</p>
                                <p>{batsmanrun} {bat}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class='items-center'>
                    <div class="text-base font-bold">{balltoball}</div>
                </div>
                <div>
                    <div>
                        <p class="text-base font-bold">{runrate}</p>
                        <p class="order-first font-semibold">{update}</p>
                    </div>
                    <div class="mx-auto grid grid-cols-2">
                        <img class="shrink-0 h-12 w-12 rounded-full" src={bowlerimg} alt={bowler} />
                        <div>
                            <p class="text-base font-bold">{bowler}</p>
                            <p class="order-first font-semibold">{bowlerscore} {bat}</p>
                        </div>
                    </div>
                </div>
            </div>


            </div>


        <div class="bg-green rounded-xl shadow-lg space-y-2 py-5 sm:py-10">
        <h3 class="mb-2 text-center">{title}</h3>
        
            <dl class="grid gap-x-10 gap-y-2 text-center grid-cols-3">
            <div class="mx-auto grid grid-cols-2 flex max-w-xs flex-col gap-y-2">
            <img class="shrink-0 h-12 w-12 rounded-full" src={logo} alt={team1} />
                <div>
                <dt class="text-base font-bold">{team1}</dt>
                <dd class="order-first font-semibold">{score} {overs}</dd>
                </div>
            </div>

            <div class="mx-auto flex max-w-xs flex-col gap-y-2">
                <dt class="text-base font-bold">{balltoball}</dt>
                <dd class="order-first font-semibold">{update}</dd>
            </div>

            <div class="mx-auto flex grid grid-cols-2 max-w-xs flex-col gap-y-2">
                <div>
                <dt class="text-base font-bold">{runrate}</dt>
                <dd class="order-first font-semibold">{update}</dd>
                </div>
            </div>
            </dl>

            <dl class="grid gap-x-10 gap-y-2 text-center grid-cols-3">
            <div class="mx-auto grid grid-cols-2 flex max-w-xs flex-col gap-y-2">
            <img class="shrink-0 h-12 w-12 rounded-full" src={batsmanimg} alt={batsman} />
                <div>
                <dt class="text-base font-bold">{batsman}</dt>
                <dd class="order-first font-semibold">{batsmanrun} {bat}</dd>
                </div>
            </div>

            <div class="mx-auto grid grid-cols-2 flex max-w-xs flex-col gap-y-2">
            <img class="shrink-0 h-12 w-12 rounded-full" src={batsman2img} alt={batsman2} />
                <div>
                <dt class="text-base font-bold">{batsman2}</dt>
                <dd class="order-first font-semibold">{batsmanrun2} {bat}</dd>
                </div>
            </div>

            <div class="mx-auto grid grid-cols-2 flex max-w-xs flex-col gap-y-2">
            <img class="shrink-0 h-12 w-12 rounded-full" src={bowlerimg} alt={bowler} />
                <div>
                <dt class="text-base font-bold">{bowler}</dt>
                <dd class="order-first font-semibold">{bowlerscore} {bat}</dd>
                </div>
            </div>
            
            </dl>
            <div>{recentballs}</div>
            <div>{lastwicket}</div>
            <div>{commentary}</div>
        </div>
        </div>

    );
};