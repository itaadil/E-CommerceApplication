import {takeEvery,put} from "redux-saga/effects"
import { createCheckoutAPI, deleteCheckoutAPI, getCheckoutAPI, updateCheckoutAPI } from "../Service"
import {ADD_CHECKOUT,ADD_CHECKOUT_RED, DELETE_CHECKOUT, DELETE_CHECKOUT_RED, GET_CHECKOUT, GET_CHECKOUT_RED, UPDATE_CHECKOUT, UPDATE_CHECKOUT_RED} from "../Constants"

function* createCheckoutSaga(action){   //executer
    var response = yield createCheckoutAPI(action.payload)
    yield put({type:ADD_CHECKOUT_RED,data:response})
}
function* getCheckoutSaga(){   //executer
    var response = yield getCheckoutAPI()
    yield put({type:GET_CHECKOUT_RED,data:response})
}
function* deleteCheckoutSaga(action){   //executer
    yield deleteCheckoutAPI(action.payload)
    yield put({type:DELETE_CHECKOUT_RED,data:action.payload})
}
function* updateCheckoutSaga(action){   //executer
    yield updateCheckoutAPI(action.payload)
    yield put({type:UPDATE_CHECKOUT_RED,data:action.payload})
}
export function* checkoutSaga(){    //watcher
    yield takeEvery(ADD_CHECKOUT,createCheckoutSaga)
    yield takeEvery(GET_CHECKOUT,getCheckoutSaga)
    yield takeEvery(DELETE_CHECKOUT,deleteCheckoutSaga)
    yield takeEvery(UPDATE_CHECKOUT,updateCheckoutSaga)
}