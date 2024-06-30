const App = () => (
        <div>
            <Animal 
                emoji="🐔" 
                name="Stevie Chicks" 
                species="Silkie Chicken" 
                age={3}
                isCute={true} />
            <Animal 
                emoji="🦊" 
                name="Foxy Brown" 
                species="Brown Fox" 
                isCute={false}
                isFriendly={true}
                obj={{ age: 4 }} />
            <RandomChoice choices={['red', 'green', 'yellow', 'blue', 'purple']} />
            <Bouncer age={21}/>
            <TodoList todos={['Walk chickens', 'Feed chickens', 'Eat chickens']}/>
            
        </div>
    )

ReactDOM.render(<App />, document.getElementById("root"))