import Link from "next/link";

const Main = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2>State management with & without Zustand</h2>
      <ul>
        <li><Link href="/smzu/counter-use-state">Counter useState</Link></li>
        <li><Link href="/smzu/counter-ctx-use-state">Counter useContext+useState</Link></li>
        <li><Link href="/smzu/counter-ctx-use-reducer">Counter useContext+useReducer</Link></li>
      </ul>
    </main>
  );
};

export default Main
