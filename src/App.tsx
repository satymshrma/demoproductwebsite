function App() {
  return (
    <>
      <main
        onContextMenu={(e) => e.preventDefault()}
        className="p-1 flex-col bg-black text-white h-svh select-none font-mono"
      >
        <h1 className="sticky text-center top-0 font-extrabold text-3xl">
          Hello Vite + React!
        </h1>
      </main>
    </>
  );
}

export default App;
