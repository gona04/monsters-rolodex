import Card from "../card/card.component";

function CardList(props: any){

    const { monsters } = props;
    return (
      <div className="monster-cards-container">
        {monsters.map((monster: any) => (
          <Card key={monster.id} monster={monster} classname="monster-list" />
        ))}
      </div>
    );
  }

export default CardList;
