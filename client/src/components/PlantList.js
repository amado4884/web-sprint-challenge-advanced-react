import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array

  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      allPlants: [],
    };
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((res) => {
        let plants = [...res.data.plantsData];
        this.setState({ ...this.state, plants, allPlants: [...plants] });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      if (this.props.query) {
        const newList = this.state.allPlants.filter((plant) => {
          return (
            plant.name.toLowerCase().includes(this.props.query.toLowerCase()) ||
            plant.description.toLowerCase().includes(this.props.query.toLowerCase()) ||
            plant.scientificName.toLowerCase().includes(this.props.query.toLowerCase()) ||
            plant.difficulty.toLowerCase().includes(this.props.query.toLowerCase()) ||
            plant.light.toLowerCase().includes(this.props.query.toLowerCase())
          );
        });

        this.setState({ ...this.state, plants: newList });
      } else {
        this.setState({ ...this.state, plants: this.state.allPlants });
      }
    }
  }
  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button className="plant-button" onClick={() => this.props.addToCart(plant)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
