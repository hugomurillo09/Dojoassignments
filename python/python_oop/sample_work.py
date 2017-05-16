class card(object):
	def __init__(self, value):
		self.heigth = 6
		self.width = 3
		self.value = value

class PlayingCard(Card):
	def color(self):
		if self.suit == "Clubs" or self.suit == "spades":
			self.color  = "red"
		elif self.suit == "hearts" or self.suit == "dimonds":
			self.color = "black"
		else: 
			self.color = "unassigned" 
			print "unassigned" 


our_card = Card()

print our_card