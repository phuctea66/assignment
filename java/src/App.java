import javax.swing.*;

public class App {
    public static void main(String [] args) throws Exception {
        int rowCount = 21;
        int columnCount = 19;
        int titleSize = 32;
        int boardHeight = rowCount * titleSize;
        int boardWidth = columnCount * titleSize;

        JFrame frame = new JFrame("Pac Man");
        frame.setVisible(true);
        frame.setSize(boardWidth, boardHeight);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
