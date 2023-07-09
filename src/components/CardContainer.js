import PlayCard from "./PlayCard";
import { data } from "../helper/data";

const CardContainer = ({ search }) => {
  return (
    <div id="cards" className=" row container mx-auto mt-5 rounded-4">
      {data
        .filter((player) =>
          player.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase().trim())
        )
        .map((player, i) => {
          // console.log(player);
          return(
            <PlayCard key={i} {...player} />
          )
        })}
    </div>
  );
};

export default CardContainer;
