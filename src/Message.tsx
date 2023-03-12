function Message() {

    const myName = "";
    if (myName) {
        return <div>Hello, {myName}</div>;
    } else {
        return <div>Hello, stranger</div>;
    }
}

export default Message;