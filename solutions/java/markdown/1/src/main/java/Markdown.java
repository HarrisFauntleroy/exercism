class Markdown {
    String parse(String markdown) {
        if (markdown == null || markdown.isEmpty()) {
            return "";
        }
        
        String[] lines = markdown.split("\n");
        StringBuilder result = new StringBuilder();
        boolean activeList = false;
        
        for (String line : lines) {
            ParsedElement element = parseLineToElement(line);
            
            if (element.isListItem() && !activeList) {
                activeList = true;
                result.append("<ul>");
            } else if (!element.isListItem() && activeList) {
                activeList = false;
                result.append("</ul>");
            }
            
            result.append(element.getHtml());
        }
        
        if (activeList) {
            result.append("</ul>");
        }
        
        return result.toString();
    }

    private ParsedElement parseLineToElement(String line) {
        String headerHtml = parseHeader(line);
        if (headerHtml != null) {
            return new ParsedElement(headerHtml, ElementType.HEADER);
        }
        
        String listItemHtml = parseListItem(line);
        if (listItemHtml != null) {
            return new ParsedElement(listItemHtml, ElementType.LIST_ITEM);
        }
        
        String paragraphHtml = parseParagraph(line);
        return new ParsedElement(paragraphHtml, ElementType.PARAGRAPH);
    }

    private String parseHeader(String markdown) {
        int count = 0;
        for (int i = 0; i < markdown.length() && markdown.charAt(i) == '#'; i++) {
            count++;
        }
        
        if (count == 0) { return null; }
        if (count > 6) { 
            return String.format("<p>%s</p>", markdown);
        }
        return String.format("<h%d>%s</h%d>", count, markdown.substring(count + 1), count);
    }

    private String parseListItem(String markdown) {
        if (isListItem(markdown)) {
            String skipAsterisk = markdown.substring(2);
            String listItemString = parseSomeSymbols(skipAsterisk);
            return String.format("<li>%s</li>", listItemString);
        }
        return null;
    }

    private String parseParagraph(String markdown) {
        return String.format("<p>%s</p>", parseSomeSymbols(markdown));
    }

    private String parseSomeSymbols(String markdown) {
        String lookingFor = "__(.+)__";
        String update = "<strong>$1</strong>";
        String workingOn = markdown.replaceAll(lookingFor, update);

        lookingFor = "_(.+)_";
        update = "<em>$1</em>";
        return workingOn.replaceAll(lookingFor, update);
    }

    private boolean isListItem(String markdown) {
        return markdown.startsWith("*");
    }
    private boolean isHeader(String markdown) {
        return markdown.charAt(0) == '#';
    }
    private boolean isParagraph(String markdown) {
        return !isHeader(markdown) && !isListItem(markdown);
    }

    private static class ParsedElement {
        private final String html;
        private final ElementType type;
        
        ParsedElement(String html, ElementType type) {
            this.html = html;
            this.type = type;
        }
        
        String getHtml() { return html; }
        boolean isListItem() { return type == ElementType.LIST_ITEM; }
    }

    private enum ElementType {
        HEADER, LIST_ITEM, PARAGRAPH
    }
}