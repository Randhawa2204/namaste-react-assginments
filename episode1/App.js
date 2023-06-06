const parent = React.createElement("div" , {id : "parent"} ,
    [
        React.createElement("div" , {id : "child1"} , 
        [
            React.createElement("h2", {} , "The Road Less Travelled"),
            React.createElement("p" , {} , "A book by M.Scott Peck")
        ]),
        React.createElement("div" , {id : "child2"} , [
            React.createElement("h2" , {} , "Who Moved my chesse"),
            React.createElement("p" , {} , "A pable by Dr. Spencer Johnson")
        ])
    ])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)