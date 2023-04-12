import Link from "next/link";

const Main = () => {
  return (
    <div>
      <h2>State management with & without Zustand</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/MpdFj8MEuJA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      <ul>
        <li><Link href="/smzu/counter-use-state">Counter useState</Link></li>
        <li><Link href="/smzu/counter-ctx-use-state">Counter useContext+useState</Link></li>
        <li><Link href="/smzu/counter-ctx-use-reducer">Counter useContext+useReducer</Link></li>
      </ul>
    </div>
  );
};

export default Main
