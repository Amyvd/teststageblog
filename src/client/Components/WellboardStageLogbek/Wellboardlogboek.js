import "./Wellboardlogboek.css";

const Wellboardlogboek = (props) => {

    console.log(props.title);
    return (
        <article className="wellboardLogboek__article">
            <header className="wellboardLogboek__article__header">
                <h1 className="wellboardLogboek__article__title">{props.title}</h1>
            </header>
            <main className="wellboardLogboek__article__main">
                <p className="wellboardLogboek__article__bericht">{props.bericht}</p>
                <p className="wellboardLogboek__article__auteur">{props.auteur}</p>
                <p className="wellboardLogboek__article__datum">{props.datum}</p>
            </main>
        </article>
    )
}

export default Wellboardlogboek;