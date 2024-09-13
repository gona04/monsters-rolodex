function Card (props:any){
        const { monster, classname } = props;
        return  (
            <div className={classname}>
                <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`Monster ${monster.name}`} />
                <h2>{monster.name}</h2>
                <p> {monster.email} </p>
            </div>
        )
}

export default Card;