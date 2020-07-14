function boot (poem) {
	var item;
	var theArray = [];
	if (poem=="byron1") {
		theArray = ["The Assyrian came down like the wolf on the fold,","And his cohorts were gleaming in purple and gold;","And the sheen of their spears was like stars on the sea,","When the blue wave rolls nightly on deep Galilee.","Like the leaves of the forest when Summer is green,","That host with their banners at sunset were seen:","Like the leaves of the forest when Autumn hath blown,","That host on the morrow lay withered and strown.","For the Angel of Death spread his wings on the blast,","And breathed in the face of the foe as he passed;","And the eyes of the sleepers waxed deadly and chill,","And their hearts but once heaved, and for ever grew still!","And there lay the steed with his nostril all wide,","But through it there rolled not the breath of his pride;","And the foam of his gasping lay white on the turf,","And cold as the spray of the rock-beating surf.","And there lay the rider distorted and pale,","With the dew on his brow, and the rust on his mail:","And the tents were all silent, the banners alone,","The lances unlifted, the trumpet unblown.","And the widows of Ashur are loud in their wail,","And the idols are broke in the temple of Baal;","And the might of the Gentile, unsmote by the sword,","Hath melted like snow in the glance of the Lord!"];
	}
	else if (poem=="byron2") {
		theArray = ["I had a dream, which was not all a dream.","The bright sun was extinguish'd, and the stars","Did wander darkling in the eternal space,","Rayless, and pathless, and the icy earth","Swung blind and blackening in the moonless air;","Morn came and went—and came, and brought no day,","And men forgot their passions in the dread","Of this their desolation; and all hearts","Were chill'd into a selfish prayer for light:","And they did live by watchfires—and the thrones,","The palaces of crowned kings—the huts,","The habitations of all things which dwell,","Were burnt for beacons; cities were consum'd,","And men were gather'd round their blazing homes","To look once more into each other's face;","Happy were those who dwelt within the eye","Of the volcanos, and their mountain-torch:","A fearful hope was all the world contain'd;","Forests were set on fire—but hour by hour","They fell and faded—and the crackling trunks","Extinguish'd with a crash—and all was black.","The brows of men by the despairing light","Wore an unearthly aspect, as by fits","The flashes fell upon them; some lay down","And hid their eyes and wept; and some did rest","Their chins upon their clenched hands, and smil'd;","And others hurried to and fro, and fed","Their funeral piles with fuel, and look'd up","With mad disquietude on the dull sky,","The pall of a past world; and then again","With curses cast them down upon the dust,","And gnash'd their teeth and howl'd: the wild birds shriek'd","And, terrified, did flutter on the ground,","And flap their useless wings; the wildest brutes","Came tame and tremulous; and vipers crawl'd","And twin'd themselves among the multitude,","Hissing, but stingless—they were slain for food.","And War, which for a moment was no more,","Did glut himself again: a meal was bought","With blood, and each sate sullenly apart","Gorging himself in gloom: no love was left;","All earth was but one thought—and that was death","Immediate and inglorious; and the pang","Of famine fed upon all entrails—men","Died, and their bones were tombless as their flesh;","The meagre by the meagre were devour'd,","Even dogs assail'd their masters, all save one,","And he was faithful to a corse, and kept","The birds and beasts and famish'd men at bay,","Till hunger clung them, or the dropping dead","Lur'd their lank jaws; himself sought out no food,","But with a piteous and perpetual moan,","And a quick desolate cry, licking the hand","Which answer'd not with a caress—he died.","The crowd was famish'd by degrees; but two","Of an enormous city did survive,","And they were enemies: they met beside","The dying embers of an altar-place","Where had been heap'd a mass of holy things","For an unholy usage; they rak'd up,","And shivering scrap'd with their cold skeleton hands","The feeble ashes, and their feeble breath","Blew for a little life, and made a flame","Which was a mockery; then they lifted up","Their eyes as it grew lighter, and beheld","Each other's aspects—saw, and shriek'd, and died—","Even of their mutual hideousness they died,","Unknowing who he was upon whose brow","Famine had written Fiend. The world was void,","The populous and the powerful was a lump,","Seasonless, herbless, treeless, manless, lifeless—","A lump of death—a chaos of hard clay.","The rivers, lakes and ocean all stood still,","And nothing stirr'd within their silent depths;","Ships sailorless lay rotting on the sea,","And their masts fell down piecemeal: as they dropp'd","They slept on the abyss without a surge—","The waves were dead; the tides were in their grave,","The moon, their mistress, had expir'd before;","The winds were wither'd in the stagnant air,","And the clouds perish'd; Darkness had no need","Of aid from them—She was the Universe."];
	}
	else {
		theArray = ["Titan! to whose immortal eyes","The sufferings of mortality,","Seen in their sad reality,","Were not as things that gods despise;","What was thy pity's recompense?","A silent suffering, and intense;","The rock, the vulture, and the chain,","All that the proud can feel of pain,","The agony they do not show,","The suffocating sense of woe,","Which speaks but in its loneliness,","And then is jealous lest the sky","Should have a listener, nor will sigh","Until its voice is echoless.","Titan! to thee the strife was given","Between the suffering and the will,","Which torture where they cannot kill;","And the inexorable Heaven,","And the deaf tyranny of Fate,","The ruling principle of Hate,","Which for its pleasure doth create","The things it may annihilate,","Refus'd thee even the boon to die:","The wretched gift Eternity","Was thine—and thou hast borne it well.","All that the Thunderer wrung from thee","Was but the menace which flung back","On him the torments of thy rack;","The fate thou didst so well foresee,","But would not to appease him tell;","And in thy Silence was his Sentence,","And in his Soul a vain repentance,","And evil dread so ill dissembled,","That in his hand the lightnings trembled.","Thy Godlike crime was to be kind,","To render with thy precepts less","The sum of human wretchedness,","And strengthen Man with his own mind;","But baffled as thou wert from high,","Still in thy patient energy,","In the endurance, and repulse","Of thine impenetrable Spirit,","Which Earth and Heaven could not convulse,","A mighty lesson we inherit:","Thou art a symbol and a sign","To Mortals of their fate and force;","Like thee, Man is in part divine,","A troubled stream from a pure source;","And Man in portions can foresee","His own funereal destiny;","His wretchedness, and his resistance,","And his sad unallied existence:","To which his Spirit may oppose","Itself—and equal to all woes,","And a firm will, and a deep sense,","Which even in torture can descry","Its own concenter'd recompense,","Triumphant where it dares defy,","And making Death a Victory."];
	}
	
	var theArray2 = shuffle(theArray);

	for (var i=0;i<theArray2.length;i++) {
		theP.insertAdjacentHTML( 'beforeend', (theArray2[i]+"<br><br>") );
	}
	
	var prob = permutations(BigInt(theArray2.length), BigInt(1));
	var prob_string = prob.toString().length;
	
	theS.innerHTML = ("Permutations (different possible ways to order this text with each refresh): About 10<sup>" + prob_string + "</sup></span>");

	function shuffle(a) { // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
	
	function productRange(a,b) {
		var product=a,i=a;
 
		while (i++<b) {
			product*=i;
		}
		return product;
	}
	function permutations(n,k) {
		return productRange(k+BigInt(1),n);
	}

}