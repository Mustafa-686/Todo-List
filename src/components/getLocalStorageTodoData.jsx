
const Todokey = "Todo";

export const getLocalStorageTodaData = () => {
    const rawTodo = localStorage.getItem(Todokey);
    if (!rawTodo || rawTodo === "undefined") return [];
    return JSON.parse(rawTodo);
};

export const setLocalStorageTodaData = (TodoList) => {
    return localStorage.setItem(Todokey, JSON.stringify(TodoList));

};
