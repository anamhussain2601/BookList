import React ,{Component} from  'react';
import bookList from './book-list';

import {connect} from 'react-redux';




class BookDetail extends Component{
    render(){

        if(! this.props.book)
        {
            return<div>select a book to get startted</div> ;
        }
        return(
        <div>
            <h3>Details For:  </h3>
                <div>
                    {this.props.book.title}
                </div>

         </div>
        )
    }
}

function mapStateToProps(state){

    return{
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);