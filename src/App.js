import Accordion from "./components/Accordion";

function App() {
    const items = [
          {
            id: 'as',
            label: 'Can I use React on a project?',
            content: 'You can use React in any project you want.'
          },
          {
            id: 'fgs',
            label: 'Can I use Javascript on a project?',
            content: 'You can use Javascript in any project you want.'
          },
          {
            id: 'aaas',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS in any project you want.'
          },
    ];
    return (
        
        <Accordion items={items}/>
    );
};

export default App;