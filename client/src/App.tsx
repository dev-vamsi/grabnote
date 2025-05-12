import ListItem from './reusable/ListItem';

const App = () => {
    return (
        <div className='max-w-[300px]'>
            <ul>
                <ListItem itemText='List 1' />
                <ListItem itemText='List 2' />
            </ul>
        </div>
    );
};

export default App;
