if __name__ == "__main__":
    f = open("styles.css", 'r')
    css = f.read()
    f.close()
    bundle = f'<!DOCTYPE html>\n<html>\n<head>\n<style>\n{css}\n</style>\n</head>\n<body id="body">\n<div class="main-grid" id="main-grid">'
    bundle += f'</div>\n<div id="pause" class="pause">Press \'P\' to unpause</div>\n<div id="score" class="score">Score: <br> Hight score:</div>\n'
    f = open("init.js", 'r')
    init = f.read()
    f.close()
    f = open("ui.js", 'r')
    ui = f.read()
    f.close()
    f = open("logic.js", 'r')
    logic = f.read()
    f.close()
    f = open("input.js", 'r')
    input = f.read()
    f.close()
    f = open("mainloop.js", 'r')
    mainloop = f.read()
    f.close()
    bundle += f'<script defer>\n{ui}\n{input}\n{logic}\n{mainloop}\n{init}\n'
    bundle += "</script>\n</body>\n</html> "
    f = open("bundle.html", 'w')
    f.write(bundle)
    f.close