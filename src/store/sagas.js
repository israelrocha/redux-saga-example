import { takeEvery, put, call, select} from 'redux-saga/effects';


function apiGet(text, length) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text + ' da RocketSeat: ' + length)
        }, 2000)
    })
}

function apiGet2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, text: 'Fazer café'},
                {id: 2, text: 'Fazer café 1'},
                {id: 3, text: 'Fazer café 2'},
                {id: 4, text: 'Fazer café 3'},
                {id: 5, text: 'Fazer café 4'},
            ])
        }, 2000)
    })
}

function* asyncAddTodo(action) {
    try {
        const todos = yield select(state => { console.log(state); return state.todos;});
        
        const response = yield call(apiGet, action.payload.text, todos.length);

        yield put( { type: 'ADD_TODO', payload: { text: response} });
    } catch (err) {
        yield put( {type: 'ERROR'})
    }
   
}

function* getTodoList() {
    try {
        const response = yield call(apiGet2);

        yield put({ type: 'SUCCESS_TODO_LIST', payload: {data: response} });
    } catch (err) {
        yield put({ type: 'FAILURE_TODO_LIST'});
    }
}

export default function* root() {
    console.log('OPAAAAAAAAAa')
    yield takeEvery('ASYNC_ADD_TODO', asyncAddTodo);
    yield takeEvery('REQUEST_TODO_LIST', getTodoList);
}