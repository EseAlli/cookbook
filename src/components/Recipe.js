<<<<<<< HEAD
import React, { Component } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

class Recipe extends Component {
  state = {
    activeRecipe: [],
    loading: false,
  };
  componentDidMount = async () => {
    const id = this.props.match.params.id;
    this.setState({ loading: true });
    const req = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );

    const res = await req.json();
    this.setState({ activeRecipe: res.recipe });
    this.setState({ loading: false });
  };
  render() {
    console.log(this.state.activeRecipe);
    if (this.state.loading) return <Spinner />;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={this.state.activeRecipe.image_url}
              alt={this.state.activeRecipe.title}
            />
            <h3 className="active-recipe__title">
              {this.state.activeRecipe.title}
            </h3>
            <h4 className="active-recipe__publisher">
              Publisher : <span>{this.state.activeRecipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a href={this.state.activeRecipe.publisher_url}>
                  {this.state.activeRecipe.publisher_url}
                </a>
              </span>
            </p>
            <p className="active-recipe__title">Ingredients</p>
            <ul>
                {this.state.activeRecipe.ingredients.map((ingredient,id)=>{
                    return <li key={id}>{ingredient}</li>
                })}
            </ul>
            <button className="active-recipe__button">
              <Link to="/"> GO HOME </Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
=======
import React, { Component } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

class Recipe extends Component {
  state = {
    activeRecipe: [],
    loading: false,
  };
  componentDidMount = async () => {
    const id = this.props.match.params.id;
    this.setState({ loading: true });
    const req = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );

    const res = await req.json();
    this.setState({ activeRecipe: res.recipe });
    this.setState({ loading: false });
  };
  render() {
    console.log(this.state.activeRecipe);
    if (this.state.loading) return <Spinner />;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={this.state.activeRecipe.image_url}
              alt={this.state.activeRecipe.title}
            />
            <h3 className="active-recipe__title">
              {this.state.activeRecipe.title}
            </h3>
            <h4 className="active-recipe__publisher">
              Publisher : <span>{this.state.activeRecipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a href={this.state.activeRecipe.publisher_url}>
                  {this.state.activeRecipe.publisher_url}
                </a>
              </span>
            </p>
            <p className="active-recipe__title">Ingredients</p>
            <ul>
                {this.state.activeRecipe.ingredients.map((ingredient,id)=>{
                    return <li key={id}>{ingredient}</li>
                })}
            </ul>
            <button className="active-recipe__button">
              <Link to="/"> GO HOME </Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
>>>>>>> 8cd950aa0191971d394012f74d0e6db777c54cc9
