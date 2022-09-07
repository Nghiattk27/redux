const increment = () => {
    return {
        type: 'Increment'
    }
}
const decrement = () => {
    return {
        type: 'Decrement'
    }
}

export { increment, decrement }