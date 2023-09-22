import CardImage from "../components/CardImage";
import Carousel from "../components/Carousel";

function Home() {
    const card_data = [
        {
            url: require('../assets/ravi.jpg'),
            title: 'Ravi Shanker',
            description: 'You can also add the indicators to the carousel, alongside the controls, too.You can also add the indicators to the carousel, alongside the controls, too.'
        },
        {
            url: require('../assets/St.gif'),
            title: 'Ravi',
            description: 'You can also add the indicators to the carousel, alongside the controls, too.You can also add the indicators to the carousel, alongside the controls, too.'
        },
        {
            url: require('../assets/ravi.jpg'),
            title: 'Ravi Rathore',
            description: 'You can also add the indicators to the carousel, alongside the controls, too.You can also add the indicators to the carousel, alongside the controls, too.'
        }
    ];
    return (
        <div>
            <div class="container mt-3">
                <div className="card">
                    <div className="card-body">
                        {/* {
                            <Carousel data={card_data}  />
                        } */}

                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div class="row">
                            {card_data.map((image, index) => {
                                return (
                                    <div key={index} class="col">
                                        <CardImage title={image.title} description={image.description} url={image.url} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;