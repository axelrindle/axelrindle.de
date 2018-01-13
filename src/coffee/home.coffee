shouldHide = true

$('.modal .background').click ->
  if shouldHide
    $('.modal').css 'display', 'none'
    console.log CoinHive.Miner

$('#donate').click (e) ->
  e.preventDefault()
  shouldHide = false
  console.log "Click"

  # references
  modal = $ $(this).attr 'href'
  close = modal.find '.close'

  # close listener
  close.click -> modal.css 'display', 'none'

  # show it
  setTimeout ->
    modal.css 'display', 'block'
    shouldHide = true
  , 50
