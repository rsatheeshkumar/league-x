import { createSelector } from 'reselect'
import { groupByKey } from '../../utils'

export const selectPlayers = (state) => state.players

export const getSelectedPlayer = (playerId) =>
  createSelector(selectPlayers, (players) =>
    players.selected.players.find((player) => player.id === playerId)
  )

export const getSelectedPlayerLength = () =>
  createSelector(selectPlayers, (players) => players.selected.players.length)

export const getSelectedPlayersTotalCredit = () =>
  createSelector(selectPlayers, (players) =>
    players.selected.players.reduce((acc, next) => {
      acc += next.event_player_credit
      return acc
    }, 0)
  )
export const getSelectedCaptain = () =>
  createSelector(selectPlayers, (players) => players.selected.captainId)

export const getSelectedVcCaptain = () =>
  createSelector(selectPlayers, (players) => players.selected.viceCaptainId)

export const getSelectedPlayersByCountry = () =>
  createSelector(selectPlayers, (players) =>
    groupByKey(players.selected.players, 'country')
  )
export const getSelectedPlayersByCountryLogo = () =>
  createSelector(selectPlayers, (players) =>
    groupByKey(players.selected.players, 'team_logo')
  )
