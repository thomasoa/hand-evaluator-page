PUBDIR= ../thomasoa.github.io/hand-evaluator
publish:
	tar cf - index.html mobile.html css graphics js manifest.json | (cd $(PUBDIR) ; tar xvf -)
	cd $PUBDIR ; git add . ; git commit -m 'Update'; git push
