import './css/base.less'
import { a } from './common/util'
import { componentA } from './components/a'

a()

var app = document.getElementById('one')
var list = componentA()
app.appendChild(list)

$('div').addClass('new12')

$.get('/comments/show', {
    id: '4193586758833502',
    page: 1
}, function (data) {
    console.log(data)
})

$.get('/msg/index', {
    format: 'cards'
}, function (data) {
    console.log(data, 1)
})