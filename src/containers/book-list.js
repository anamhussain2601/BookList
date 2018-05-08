import React ,{Component} from  'react';
import { connect} from 'react-redux';


class BookList extends Component{
renderList(){
    console.log("props:",this.props);
    return this.props.book.map((book)=>{
        return(
            <li key ={book.title} className = "list-group-item">{book.title}</li>
        );
    });
}

    render(){
        return (
            <ul className = "list-group col-sm-4" >
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state){
  console.log("state:", state);
    //return value from here will show
    // up as a prop , inside of BookList

    return{
        book: state.books
    };
}

export default connect (mapStateToProps)(BookList);
