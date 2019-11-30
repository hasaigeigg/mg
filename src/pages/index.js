import Loadable from 'react-loadable';
import Loading from '../common/loading'

export const Home = Loadable({
    loader: ()=>import('./home'),
    loading: Loading
})

export const Collection = Loadable({
    loader: ()=>import('./collection'),
    loading: Loading
})

export const Classification = Loadable({
    loader: ()=>import('./classification'),
    loading: Loading
})

export const Login = Loadable({
    loader: ()=>import('./login'),
    loading: Loading
})

export const Mine = Loadable({
    loader: ()=>import('./mine'),
    loading: Loading
})

export const Shipping = Loadable({
    loader: ()=>import('./shipping'),
    loading: Loading
})