import React, {Component} from 'react';

class ErrorMessage extends Component {
    render() {
        return (
            <script>{alert("You can't add a book with empty parameters")}</script>
        )
    }
}

export default ErrorMessage