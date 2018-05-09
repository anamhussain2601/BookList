import React ,{Component} from  'react';
import { connect} from 'react-redux';
import {selectBook} from '../actions/index';   
import {bindActionCreators} from 'redux'; 


class BookList extends Component{
renderList(){
    console.log("props:",this.props);
    return this.props.book.map((book)=>{
        return(
            <li 
            key ={book.title}
            onClick = {( )=> this.props.selectBook(book)}
             className = "list-group-item">
             {book.title}
             </li>
        );
    });
}

    render(){
        return (
            <ul className = "list-group col-md-4" >
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


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({selectBook: selectBook} , dispatch  );
}
export default connect (mapStateToProps, mapDispatchToProps)(BookList);
