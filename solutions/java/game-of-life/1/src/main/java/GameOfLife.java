class GameOfLife {
    private static final int ALIVE = 1;
    private static final int DEAD = 0;
    private static final int[] DR = {-1, -1, -1, 0, 0, 1, 1, 1};
    private static final int[] DC = {-1, 0, 1, -1, 1, -1, 0, 1};

    public int[][] tick(int[][] matrix){
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return matrix;
        }
        int[][] newMatrix = new int[matrix.length][matrix[0].length];
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                newMatrix[row][col] = applyRules(matrix, row, col);
            }
        }
        return newMatrix;
    }

    public int countNeighbours(int[][] matrix, int row, int col) {
        int count = 0;
        for (int i = 0; i < 8; i++) {
            int newRow = row + DR[i];
            int newCol = col + DC[i];
            if (cellWithinBounds(matrix, newRow, newCol)) {
                count += matrix[newRow][newCol];
            }
        }
        return count;
    }

    public boolean cellWithinBounds(int[][] matrix, int row, int col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }

    public int applyRules(int[][] matrix, int row, int col) {
        int neighbourCount = countNeighbours(matrix, row, col);
        int cell = matrix[row][col];
        if (cell == ALIVE) {
            return (neighbourCount < 2 || neighbourCount > 3) ? DEAD : ALIVE;
        } else {
            return (neighbourCount == 3) ? ALIVE : DEAD;
        }
    }
}
