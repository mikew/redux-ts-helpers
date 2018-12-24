# redux-ts-helpers

TypeScript helpers for idiomatic Redux.

## Action Constants

`applyNamespace` takes a namespace and an object of action constants. You
get back an object with the same keys, but they are strings like
`users/filter`, `users/update`, `users/delete`.

<table>
  <tr>
    <th>After</th>
    <th>Before</th>
  </tr>

  <tr>
    <td>

```typescript
export const constants = applyNamespace('users', {
  filter: 0,
  update: 0,
  delete: 0,
})
```

</td>
    <td>

```typescript
export const FILTER = 'USERS_FILTER'
export const UPDATE = 'USERS_UPDATE'
export const DELETE = 'USERS_DELETE'
```

</td>
  </tr>
</table>

### Actions

`createAction` takes one argument: the action constant. You get back a
function that acts as any action creator.

This function takes two arguments: `payload` and `meta`.

<table>
  <tr>
    <th>After</th>
    <th>Before</th>
  </tr>

  <tr>
    <td>

```typescript
export const increment = createAction(constants.increment)
export const setIncrementBy = createAction<number>(constants.setIncrementBy)
```

</td>
    <td>

```typescript
export interface Increment {
  type: 'INCREMENT'
}
export const increment: ActionCreator<Increment> = () => ({
  type: 'INCREMENT',
})

export interface SetIncrementBy {
  type: 'SET_INCREMENT_BY'
  payload: number
}
export const setIncrementBy: ActionCreator<SetIncrementBy> = (n: number) => ({
  type: 'SET_INCREMENT_BY',
  payload: n,
})
```

</td>
  </tr>
</table>

### Reducers

`createReducer` builds a reducer for you. No more switch statements, you pass
it an object.

Use `tsGetReturnType` and `typeof` to get the type of a function's return
value without having to know the interface beforehand.

<table>
  <tr>
    <th>After</th>
    <th>Before</th>
  </tr>

  <tr>
    <td>

```typescript
import * as actions from './actions'

const initialState = {
  currentNumber: 0,
  incrementBy: 0,
}

export default createReducer(initialState, {
  [actions.constants.increment]: (state, action) => {
    return {
      ...state,
      currentNumber: state.currentNumber + state.incrementBy,
    }
  },

  [actions.constants.setIncrementBy]: (state, action) => {
    const actionTyped = tsGetReturnType(actions.setIncrementBy, action)

    return {
      ...state,
      incrementBy: actionTyped.payload,
    }
  },
})
```

</td>
    <td>

```typescript
import * as actions from './actions'

interface State {
  currentNumber: number
  incrementBy: number
}

const initialState: State {
  currentNumber: 0,
  incrementBy: 0,
}

export const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        currentNumber: state.currentNumber + state.incrementBy,
      }

    case actions.SET_INCREMENT_BY: {
      const actionTyped = action as actions.SetIncrementBy

      return {
        ...state,
        incrementBy: actionTyped.payload
      }
    }

    default:
      return state
  }
}
```

</td>
  </tr>

</table>
