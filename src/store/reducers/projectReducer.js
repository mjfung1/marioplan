const previousState = {
    projects: [
            {id: '1', title: 'help me find peach', content: 'peaches peaches'},
            {id: '2', title: 'collect all the stars', content: 'to rescue princess peach'},
            {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = previousState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            break;
        default:
            return state;
    }
}

export default projectReducer;