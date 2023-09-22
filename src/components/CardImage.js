import { Height } from "@mui/icons-material";

function CardImage(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.url} className="card-img-top" style={{ Height: '200px' }} alt="..." />
            <div className="card-body">
                <h3>{props.title}</h3>
                <p className="card-text"> {props.description}</p>
            </div>
        </div>
    );
}
export default CardImage;